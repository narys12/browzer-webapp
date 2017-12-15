import { Apollo } from 'apollo-angular/Apollo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';

/*
  Generated class for the MemoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemoryProvider {

  constructor(private apollo: Apollo) {
    console.log('Hello MemoryProvider Provider');
  }

  public getMemory(memoryId: string): any {
    this.apollo.watchQuery({
      query: gql`{
        query memory($id: String) {
          memory(id:$id) {
            id title
          }
        }
      }`,
      variables: {
        id: memoryId
      }
    }).valueChanges
    .subscribe(data => {
      console.log("data : " + data)
    })
  }

}
