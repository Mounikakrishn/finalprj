//using Microsoft.AspNetCore.Components;

using Microsoft.AspNetCore.Mvc;
using Searchmicroservices.Models;
using Searchmicroservices.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Searchmicroservices.Controllers
{
    [Route("api/1.0/flight/search")]
    [ApiController]
    public class SearchController : ControllerBase

    {
          AirlineDBContext dbAirline;

        public SearchController(AirlineDBContext _dbAirline)
        {
            dbAirline = _dbAirline;
        }
      
        [HttpGet]
        public IEnumerable<TbSchedule> search(string fromplace)
        {

            var data = dbAirline.TbSchedules;
            List<TbSchedule> lst = new List<TbSchedule>();
            foreach (var dr in data)
            {
                if (dr.Fromplace == fromplace)
                {
                    lst.Add(dr);
                }
            }
            return lst;

        }


    }

}
