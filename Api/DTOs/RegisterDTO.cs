using System.ComponentModel.DataAnnotations;

namespace Api.DTOs
{
    public class RegisterDTO
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(9 , MinimumLength = 5)]
        public string Password { get; set; }
    }
}