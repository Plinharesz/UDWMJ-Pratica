using System.Text.Json.Serialization;

namespace ConsumerDisneyIdApi.Models
{
    public class DisneyResponse
    {
        [JsonPropertyName("data")]
        public CharacterData? Data { get; set; }
    }

    public class CharacterData
    {
        [JsonPropertyName("name")]
        public string? Name { get; set; }

        [JsonPropertyName("imageUrl")]
        public string? ImageUrl { get; set; }
    }
}