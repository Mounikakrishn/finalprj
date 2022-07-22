using Adminmicroservices.Models;
using Adminmicroservices.ViewModel;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Adminmicroservices.Services
{
    public class JWTMangerRepository : IJWTMangerRepository
    {
        Dictionary<string, string> adminRecords;


        private readonly AirlineDBContext airlinedb;

        private readonly IConfiguration configuration;

        public JWTMangerRepository(IConfiguration _configuration, AirlineDBContext _airlinedb)
        {
            configuration = _configuration;
            airlinedb = _airlinedb;
        }
        public Tokens Authenticate(AdminLoginViewModel users, bool IsRegister)
        {
            if (IsRegister)
            {
                if (airlinedb.TbAdmins.Any(x => x.UserName == users.UserName))
                {
                    return null;
                }

                TbAdmin adminTb = new TbAdmin();
                adminTb.UserName = users.UserName;
                adminTb.Password = users.Password;
                airlinedb.TbAdmins.Add(adminTb);
                airlinedb.SaveChanges();
            }
            adminRecords = airlinedb.TbAdmins.ToList().ToDictionary(x => x.UserName.Trim(), x => x.Password.Trim());
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenkey = Encoding.UTF8.GetBytes(configuration["JWT:Key"]);
            if (adminRecords.Any(x => x.Key.Trim() == users.UserName.Trim() && x.Value.Trim() == users.Password.Trim()))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[] {
                new Claim(ClaimTypes.Name,users.UserName)
                }),
                    Expires = DateTime.UtcNow.AddMinutes(10),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenkey), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
               
                return new Tokens { Token = tokenHandler.WriteToken(token) };
            }
            else
            {

                return null;
            }

          }
        public List<TbAdmin> FindAll()
        {
            return airlinedb.TbAdmins.ToList();
        }
    }
}


