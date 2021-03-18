using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Api.Data;
using Api.Entities;
using System.Security.Cryptography;
using System.Text;
using Api.DTOs;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        public AccountController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(RegisterDTO userDTO)
        {
            if(await UserIsExist(userDTO.Username)) return BadRequest("User is exist.");

            using var hmac = new HMACSHA512();

            var user = new AppUser {
                UserName = userDTO.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDTO.Password)),
                PasswordSalt = hmac.Key
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        private async Task<bool> UserIsExist(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }
    }
}