package com.gms.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class MemberDTO {
	private String userid, password, name, ssn, age, gender, teamid, roll, subject, email, phone;
}
