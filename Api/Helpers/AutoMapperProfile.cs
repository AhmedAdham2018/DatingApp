using System.Linq;
using Api.DTOs;
using Api.Entities;
using Api.Extensions;
using AutoMapper;

namespace Api.Helpers
{
    public class AutoMapperProfile : Profile
    {   
        public AutoMapperProfile()
        {
            CreateMap<AppUser , MemberDTO>()
                .ForMember(destinationMember => destinationMember.PhotoUrl , memberOptions => memberOptions.MapFrom(
                    src => src.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(destinationMember => destinationMember.Age , memberOptions => memberOptions.MapFrom(
                    src => src.DateOfBirth.CalcAge()));    

            CreateMap<Photo , PhotoDTO>();
        }
    }
}