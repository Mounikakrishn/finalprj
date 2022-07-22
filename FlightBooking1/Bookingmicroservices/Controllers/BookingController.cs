using Bookingmicroservices.Models;
using Bookingmicroservices.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookingmicroservices.Controllers
{
    [Route("api/1.0/flight/booking")]
    [ApiController]
    public class BookingController : ControllerBase

    {

        AirlineDBContext dbAirline;
        public BookingController(AirlineDBContext _dbAirline)
        {
            dbAirline = _dbAirline;
        }
        
        [HttpPost("BookingTicket")]
        public IActionResult BookingTicket([FromBody] BookingViewModel bookingviewmodel)
        {
            Random random = new Random();
            int PNR = random.Next();
            TbBooking tbbooking = new TbBooking();
            tbbooking.BookingId = bookingviewmodel.BookingId;
            tbbooking.AirlineId = bookingviewmodel.AirlineId;
            tbbooking.Airlinename = bookingviewmodel.Airlinename;
            tbbooking.Username = bookingviewmodel.Username;
            tbbooking.Gender = bookingviewmodel.Gender;
            tbbooking.Seatnum = bookingviewmodel.Seatnum;
            tbbooking.Address = bookingviewmodel.Address;
            tbbooking.Contact = bookingviewmodel.Contact;
            tbbooking.Email = bookingviewmodel.Email;
            tbbooking.PNR = PNR.ToString();
            dbAirline.TbBookings.Add(tbbooking);
            dbAirline.SaveChanges();
            return Ok("Booking successful");
        }
        [HttpGet]

        public IActionResult history(string emailId)
        {
            try
            {
                var data = dbAirline.TbBookings;
                List<TbBooking> list = new List<TbBooking>();
                foreach (var db in data)
                {
                    if (db.Email == emailId)
                    {
                        list.Add(db);

                    }
                }
                return Ok(list);

            }
            catch
            {
                return BadRequest();
            }
        }
       // [Route("Cancel")]
      //  [HttpPost]


    }
}



