using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace RYDesign.Models
{
    public class Forum
    {
        public int ID { get; set; }
        public string ForumTitle { get; set; }
        public string ForumAuthor { get; set; }
        public DateTime ForumCreatedOn { get; set; }

        [JsonIgnore]
        public virtual ICollection<Feedback> Feedbacks { get; set; }
    }
}
