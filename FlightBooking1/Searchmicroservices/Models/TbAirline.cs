﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Searchmicroservices.Models
{
    public partial class TbAirline
    {
        public int AirlineId { get; set; }
        public string AirlineName { get; set; }
        public string AirlineLogo { get; set; }
        public string Address { get; set; }
        public string ContactNumber { get; set; }
    }
}
