import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello(): string {
        return "MYEAW";
    }

    public introduce(): string {
        return "My name is TOM!";
    }
}
