package com.AiMailSender.AiMailSender.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;

@Service
public class OpenAIService {

    private final WebClient webClient;

    public OpenAIService(WebClient openAIWebClient) {
        this.webClient = openAIWebClient;
    }

    public String getChatCompletion(String userMessage) {
        String endpoint = "/chat/completions";

        // Define the request payload
        String requestPayload = """
    {
      "model": "gpt-4o-mini",
      "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "%s"}
      ]
    }
    """.formatted(userMessage);

        // Log the payload for debugging
        System.out.println("Request Payload: " + requestPayload);

        // Make the API call
        return webClient.post()
                .uri(endpoint)
                .header("Content-Type", "application/json")
                .bodyValue(requestPayload)
                .retrieve()
                .bodyToMono(String.class)
                .block(); // Blocking call (replace with reactive handling if needed)
    }


}
