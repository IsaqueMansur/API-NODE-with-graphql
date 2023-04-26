import { Resolver, Query, Mutation } from 'type-graphql';

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async helloWorld() {
    return 'Hello World';
  }

  @Mutation()
  async createAppointment() {}
}
