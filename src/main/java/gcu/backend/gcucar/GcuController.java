package gcu.backend.gcucar;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class GcuController {
    @RequestMapping("/") //루트 페이지를 나타냄 / 이거
    public String index(){
        return "index";
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST) //post 새로운 객체 만드는 역할
    public ModelAndView save(@ModelAttribute Car car) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("car-data"); //해당 뷰와 연결 user-data.html 페이지
        modelAndView.addObject("user", car);
        return modelAndView;
    }
}
