package com.gms.web.img;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;

import lombok.Data;

@Component
@Data @Lazy
public class Image {
	private String imgSeq;
	private String imgName;
	private String extension;
	private String userid;
}
