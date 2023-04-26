import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { CreateAppointmentInput } from '../dtos/inputs/create-appointment-input';
import { Appointment } from '../dtos/models/appointment-model';

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async helloWorld() {
    return 'Hello World';
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const appointment: Appointment = {
      startsAt: data.startAt,
      endsAt: data.endsAt,
    };
    return appointment;
  }
}
