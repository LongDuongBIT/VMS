﻿using AutoMapper;
using Microsoft.AspNetCore.Identity;
using System;
using System.Linq;
using VMS.Application.ViewModels;
using VMS.Domain.Models;
using VMS.GenericRepository;

namespace VMS.Application.Automapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Activity, ActivityViewModel>();
            CreateMap<CreateActivityViewModel, Activity>();
            CreateMap<Activity, CreateActivityViewModel>();
            CreateMap<Activity, ViewActivityViewModel>()
                .ForMember(dest => dest.CreatedDate, opt => opt.MapFrom(src => src.CreatedDate.ToString("dd/MM/yyyy")))
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => src.StartDate.ToString("dd/MM/yyyy")))
                .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => src.EndDate.ToString("dd/MM/yyyy")));
            CreateMap<Area, AreaViewModel>();
            CreateMap<Activity, UserWithActivityViewModel>();
            CreateMap<Skill, SkillViewModel>();
            CreateMap<User, UserViewModel>()
                .ForMember(x => x.Areas, opt => opt.MapFrom(src => src.UserAreas.OrderByDescending(x => x.Area.IsPinned).Select(x => new AreaViewModel
                {
                    Id = x.AreaId,
                    Name = x.Area.Name,
                    Icon = x.Area.Icon,
                    Color = x.Area.Color,
                    IsPinned = x.Area.IsPinned
                })))
                .ForMember(x => x.Skills, opt => opt.MapFrom(src => src.UserSkills.Select(x => new SkillViewModel
                {
                    Id = x.SkillId,
                    Name = x.Skill.Name
                })));
            CreateMap<CreateUserProfileViewModel, User>();
            CreateMap<CreateUserProfileViewModel, User>();
            CreateMap<User, CreateUserProfileViewModel>()
                .ForMember(x => x.Areas, opt => opt.MapFrom(src => src.UserAreas.OrderByDescending(x => x.Area.IsPinned).Select(x => new AreaViewModel
                {
                    Id = x.AreaId,
                    Name = x.Area.Name,
                    Icon = x.Area.Icon,
                    Color = x.Area.Color,
                    IsPinned = x.Area.IsPinned
                })))
                .ForMember(x => x.Skills, opt => opt.MapFrom(src => src.UserSkills.Select(x => new SkillViewModel
                {
                    Id = x.SkillId,
                    Name = x.Skill.Name
                })));

            CreateMap<CreateOrgProfileViewModel, User>();
            CreateMap<User, CreateOrgProfileViewModel>()
                .ForMember(x => x.Areas, opt => opt.MapFrom(src => src.UserAreas.OrderByDescending(x => x.Area.IsPinned).Select(x => new AreaViewModel
                {
                    Id = x.AreaId,
                    Name = x.Area.Name,
                    Icon = x.Area.Icon,
                    Color = x.Area.Color,
                    IsPinned = x.Area.IsPinned
                })));
            CreateMap<Faculty, FacultyViewModel>();
            CreateMap<PaginatedList<Activity>, PaginatedList<ActivityViewModel>>();
            MapReportToFeedback();
            MapAccountToUser();
        }

        private void MapReportToFeedback()
        {
            CreateMap<ReportViewModel, Feedback>()
                .ForMember(dest => dest.CreatedDate, opt => opt.MapFrom(src => DateTime.Now))
                .ForMember(dest => dest.CreatedBy, opt => opt.MapFrom(src => src.UserId))
                .ForMember(dest => dest.Content, opt => opt.MapFrom(src => src.DesReport))
                .ForMember(dest => dest.ActivityId, opt => opt.MapFrom(src => src.ActivityId));
        }

        private void MapAccountToUser()
        {
            PasswordHasher<User> hasher = new();
            CreateMap<CreateAccountViewModel, User>()
                .ForMember(x => x.FullName, opt => opt.MapFrom(src => src.LastName + " " + src.FirstName))
                .ForMember(x => x.UserName, opt => opt.MapFrom(src => src.Email))
                .ForMember(x => x.PasswordHash, opt => opt.MapFrom(src => hasher.HashPassword(null, src.StudentId)))
                .ForMember(x => x.CreatedDate, opt => opt.MapFrom(src => DateTime.Now))
                .ForMember(x => x.LockoutEnabled, opt => opt.MapFrom(src => true))
                .ForMember(x => x.NormalizedEmail, opt => opt.MapFrom(src => src.Email.ToUpper()))
                .ForMember(x => x.NormalizedUserName, opt => opt.MapFrom(src => src.Email.ToUpper()));
        }
    }
}