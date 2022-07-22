//using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ticketmicroservices.Models;

namespace Ticketmicroservices.Controllers
{
    [Route("api/1.0/flight/ticket")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        AirlineDBContext db;
        public TicketController (AirlineDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        //public IEnumerable<TbBooking> ShowData()
        //{
        //    return db.TbBookings;
        //}
        // [HttpGet("{PNR}",Name ="GetDetaildsByPNR")]
        public IActionResult GetByEmail(string PNR)
        {
            var data = db.TbBoookings.SingleOrDefault(x => x.PNR == PNR);
            if (data == null)
            {
             return Ok("Record not found");
            }
            return Ok(data);
        }
    }
}
