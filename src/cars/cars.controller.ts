import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsService: CarsService) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarsById( @Param('id', ParseIntPipe) id: number) {    
        return this.carsService.findOne(id);       
    }

    @Post()
    create(@Body() body: any) {
        return {
            message: 'Car created',
            body
        };
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
        return {
            message: `Car #${id} updated`,
            body
        };
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return {
            message: `Car #${id} deleted`,
        };
    }
}
