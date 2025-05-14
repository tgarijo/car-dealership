import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        { id: 1, name: 'Toyota', model: 'Corolla' },
        { id: 2, name: 'Honda', model: 'Civic' },
        { id: 3, name: 'Ford', model: 'Mustang' },
        { id: 4, name: 'Chevrolet', model: 'Camaro' },
        { id: 5, name: 'Nissan', model: 'Altima' },
    ];

    findAll() {
        return this.cars;
    }
    
    findOne(id: number) {       
        const car = this.cars.find(car => car.id === id);

        if (!car) {
            throw new NotFoundException(`Car with ID ${id} not found`);
        }
        
        return car;
    }


}
