﻿using Microsoft.AspNetCore.Components;
using System.Collections.Generic;

namespace VMS.Pages.Organization.VolunteersListPage
{
    public partial class Title : ComponentBase
    {
        [Parameter]
        public string Name { get; set; }
    }
}