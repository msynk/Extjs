using System.Collections.Generic;
using HelpDesk.Models.Models;

namespace HelpDesk.Business.DTO
{
	public partial class UserDTO
  {
    public static UserDTO FromUser(User entity)
    {
      return new UserDTO();
    }

    public static IList<UserDTO> FromUsers(IList<User> entities)
    {
      return new List<UserDTO>();
    }

    public static User ToUser(UserDTO dto)
    {
      return new User();
    }
  }
}
