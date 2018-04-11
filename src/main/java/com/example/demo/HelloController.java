package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 16:26 2018/3/29
 * @Modified By:
 */
@RestController
public class HelloController {

	@RequestMapping("/hello")
	public String hello() {
		return "hello, this is a springboot demo";
	}
	
}
