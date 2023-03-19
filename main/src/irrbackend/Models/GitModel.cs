using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Web;
using System.Text.Json.Serialization;

namespace irrbackend.Models
{
	public class GitModel
    {
        [JsonPropertyName("data")]
        public Data Data { get; set; }
    }

    public partial class Data
    {
        [JsonPropertyName("viewer")]
        public Viewer Viewer { get; set; }
    }

    public partial class Viewer
    {
        [JsonPropertyName("contributionsCollection")]
        public ContributionsCollection ContributionsCollection { get; set; }
    }

    public partial class ContributionsCollection
    {
        [JsonPropertyName("contributionCalendar")]
        public ContributionCalendar ContributionCalendar { get; set; }
    }

    public partial class ContributionCalendar
    {
        [JsonPropertyName("weeks")]
        public Week[] Weeks { get; set; }
    }

    public partial class Week
    {
        [JsonPropertyName("contributionDays")]
        public ContributionDay[] ContributionDays { get; set; }
    }

    public partial class ContributionDay
    {
        [JsonPropertyName("contributionCount")]
        public long ContributionCount { get; set; }
    }
}