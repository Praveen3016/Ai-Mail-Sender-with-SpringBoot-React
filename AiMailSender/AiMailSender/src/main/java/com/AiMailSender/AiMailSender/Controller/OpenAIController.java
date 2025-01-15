package com.AiMailSender.AiMailSender.Controller;
import com.AiMailSender.AiMailSender.DTO.MessageRequest;
import com.AiMailSender.AiMailSender.Service.OpenAIService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/openai")
public class OpenAIController {

    private final OpenAIService openAIService;

    public OpenAIController(OpenAIService openAIService) {
        this.openAIService = openAIService;
    }

    @PostMapping("/generate")
    public String generateEmail(@RequestBody MessageRequest request) throws JsonProcessingException {
        // Extract the message from the request
        String userMessage = request.getMessage();

        // Pass the extracted message to the service
        return openAIService.getChatCompletion(userMessage);
    }

}

