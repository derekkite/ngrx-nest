import {Body, Controller, Get, Post, Response, Headers, Param} from "@nestjs/common";
import {ActionsService} from "../components/actions/actions.service";



@Controller()
export class TapiController {
    constructor(private as: ActionsService) {}
    
    @Get('tapi/:action')
    async dispatchGet(@Response() res, @Param('action') action) {
        // console.log('dispatchGet', action);
        
        const users = this.as.dispatchGetAction(JSON.parse(action), res);
        // res.status(HttpStatus.OK).json(users);
    }
    
    @Post('tapi/')
       dispatchPost(@Response() res, @Body() action) {
        
       let body = Object.keys(action)[0];
        
        const msg = this.as.dispatchPostAction(JSON.parse(body), res);
        // res.status(HttpStatus.OK).json(msg);
    }
}
