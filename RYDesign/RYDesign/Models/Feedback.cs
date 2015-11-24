using Newtonsoft.Json;
using System;

namespace RYDesign.Models
{
    public class Feedback
    {
        public int FeedbackID { get; set; }
        public int ForumID { get; set; }
        public string ReplierComment { get; set; }
        public string ReplierName { get; set; }
        public DateTime DateWritten { get; set; }

        [JsonIgnore]
        public virtual Forum Forums { get; set; }
    }
}
