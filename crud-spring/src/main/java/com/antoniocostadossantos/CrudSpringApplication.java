package com.antoniocostadossantos;

import com.antoniocostadossantos.model.Course;
import com.antoniocostadossantos.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();
			Course course = new Course();
			course.setName("Angular com Spring");
			course.setCategory("front-end");
			courseRepository.save(course);

			Course course2 = new Course();
			course2.setName("Jetpack compose");
			course2.setCategory("mobile");
			courseRepository.save(course2);
		};
	}

}
