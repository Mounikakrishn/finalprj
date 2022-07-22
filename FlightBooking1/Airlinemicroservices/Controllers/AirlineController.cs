using Airlinemicroservices.Models;
using Airlinemicroservices.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Airlinemicroservices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirlineController : ControllerBase
    {
        AirlineDBContext dbAirline;

        public AirlineController(AirlineDBContext _dbAirline)
        {
            dbAirline = _dbAirline;
        }
        [HttpGet]
        public IEnumerable<TbSchedule> getData()
        {
            return dbAirline.TbSchedules.ToList();
        }
        [HttpPost("Inventory/Add")]
        // [Authorize]
        public IActionResult AddInventory(Schedule schedule)
        {
            TbSchedule tbschedule = new TbSchedule();
             tbschedule.AirlineId = Convert.ToInt32(schedule.AirlineId); 
             tbschedule.Airlinename = schedule.Airlinename;
            tbschedule.Fromplace = schedule.Fromplace;
            tbschedule.Toplace = schedule.Toplace;
            tbschedule.Startdatetime = schedule.Startdatetime;
            tbschedule.Enddatetime = schedule.Enddatetime;
            tbschedule.Scheduleddays = schedule.Scheduleddays;
            tbschedule.Businessclsseats = Convert.ToInt32(schedule.Businessclsseats);
            tbschedule.Nonbusinessclsseats =Convert.ToInt32(schedule.Nonbusinessclsseats);
            tbschedule.Ticketprice = Convert.ToInt32(schedule.Ticketprice);
            tbschedule.Noofrows = Convert.ToInt32(schedule.Noofrows);
            tbschedule.Meal = schedule.Meal;
            dbAirline.TbSchedules.Add(tbschedule);
            dbAirline.SaveChanges();
            return Ok("Record Added Successfully");
        }


    }
}
