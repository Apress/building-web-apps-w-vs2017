using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SpyStore.DAL.EF;
using SpyStore.DAL.Repos.Base;
using SpyStore.DAL.Repos.Interfaces;
using SpyStore.Models.Entities;

namespace SpyStore.DAL.Repos
{
    public class CustomerRepo : RepoBase<Customer>, ICustomerRepo
    {
        public CustomerRepo(DbContextOptions<StoreContext> options) : base(options)
        {
        }
        public CustomerRepo() : base()
        {
        }

        public override IEnumerable<Customer> GetAll()
            => Table.OrderBy(x => x.FullName);

        public override IEnumerable<Customer> GetRange(int skip, int take)
            => GetRange(Table.OrderBy(x => x.FullName), skip, take);

    }
}
