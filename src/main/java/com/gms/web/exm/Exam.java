package com.gms.web.exm;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.sbj.Subject;

import lombok.Data;

@Component
@Data @Lazy
public class Exam {
	String sbjSeq, exmSeq,term,score,userid;
}
