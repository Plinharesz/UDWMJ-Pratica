using static System.Console;
using System.Text.Json;
using System.Net.Http;
using System;
using ConsumerDisneyIdApi.Models; 

var apiUrl = "https://api.disneyapi.dev/character/423";
using var cliente = new HttpClient();

try
{
    // Faz a requisição GET
    HttpResponseMessage response = await cliente.GetAsync(apiUrl);
    response.EnsureSuccessStatusCode();

    // Lê a resposta como string
    string respostaApi = await response.Content.ReadAsStringAsync();

    // Configura a desserialização
    var opcoes = new JsonSerializerOptions
    {
        PropertyNameCaseInsensitive = true
    };

    // Converte o JSON para o objeto DisneyResponse
    DisneyResponse? resultado = JsonSerializer.Deserialize<DisneyResponse>(respostaApi, opcoes);

    // Valida se os dados existem e imprime na tela
    if (resultado?.Data != null)
    {
        WriteLine("Nome:");
        WriteLine(resultado.Data.Name);
        WriteLine("Imagem:");
        WriteLine(resultado.Data.ImageUrl);
    }
}
catch (Exception ex)
{
    WriteLine($"Ocorreu um erro ao consultar a API: {ex.Message}");
}