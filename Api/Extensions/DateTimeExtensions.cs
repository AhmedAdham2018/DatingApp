using System;

namespace Api.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalcAge(this DateTime dob)
        {
            var today = DateTime.Today;
            var age = today.Year - dob.Year;
            if(dob.Date > today.AddYears(-age)) return age--;
            return age;
        }
    }
}