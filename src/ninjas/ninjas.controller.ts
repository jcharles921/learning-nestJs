import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjasDto } from './dto/create-ninjas.dto';
import { UpdateNinjasDto } from './dto/update-ninjas.dto';

@Controller('ninjas')
export class NinjasController {
    @Get()
    getNinjas(){
        return [];

    }

    @Get(`:id`)
    getOneNinjas(@Param('id') id: String){
        return[id,'one ninjas']
    }
    @Post()
    createOneNinjas(@Body() createNinjasDto: CreateNinjasDto,@Query('ninjutsu') ninjutsu: String){
        return {
            name: createNinjasDto.name,
            age: createNinjasDto.age,
            village: createNinjasDto.village

        }
    }
    @Put(':id')
    updateOneNinja(@Param('id') id: String,@Body() updateOneNinjasDto :UpdateNinjasDto){
        return{ id,
            name:updateOneNinjasDto.name,
            age:updateOneNinjasDto.age
        }
    }

}
