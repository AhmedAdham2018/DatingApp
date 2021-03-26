using Api.DTOs;
using Api.Entities;
using AutoMapper;

namespace Api.Helpers
{
    public class AutoMapperProfile : Profile
    {   
        public AutoMapperProfile()
        {
            CreateMap<AppUser , MemberDTO>();

            CreateMap<Photo , PhotoDTO>();
        }
    }
}