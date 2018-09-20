package com.gms.web.sbj;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;

import lombok.Data;

@Component
@Data @Lazy
public class Subject {
	String sbjSeq, sbjName;
}
// 부모 자식 FK 