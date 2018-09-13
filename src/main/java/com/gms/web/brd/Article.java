package com.gms.web.brd;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Data @Component @Lazy
public class Article {
	private String bno, title, content, writer, regdate, viewcnt;
}
