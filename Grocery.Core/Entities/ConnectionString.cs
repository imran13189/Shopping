using System;
using System.Collections.Generic;
using System.Text;

namespace Grocery.Core.Entities
{
    public sealed class ConnectionString
    {
        public ConnectionString(string value) => Value = value;
        public string Value { get; }
    }
}
