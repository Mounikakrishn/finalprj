using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Searchmicroservices.ViewModel
{
    public class SearchViewModel
    {
        public string Fromplace { get; set; }
        public string Toplace { get; set; }
        public DateTime? Startdatetime { get; set; }
        public DateTime? Enddatetime { get; set; }

    }
}
