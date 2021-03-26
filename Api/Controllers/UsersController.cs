using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Api.Interfaces;
using AutoMapper;
using Api.DTOs;

namespace Api.Controllers
{

    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepo _userRepository;
        private readonly IMapper _mapper;
        public UsersController(IUserRepo userRepository, IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDTO>>> getUsers()
        {
            return Ok(await _userRepository.GetMembersAsync());
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDTO>> getUser(string username)
        {
            return await _userRepository.GetMemberAsync(username);
        }

    }
}