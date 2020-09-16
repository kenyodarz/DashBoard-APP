import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _data: any;

  constructor(private http: HttpClient) {}

  public getData() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/config/app-config.json').subscribe(
        (data) => {
          this._data = data;
          resolve(true);
        },
        (error) => {
          console.error('Error al obtener la configuracion: ' + error);
          reject(true);
        }
      );
    });
  }

  get logo() {
    return _.get(this._data, 'logo');
  }
  get logoLogin() {
    return _.get(this._data, 'logoLogin');
  }
  get nameSite() {
    return _.get(this._data, 'name_site');
  }
  get min() {
    return _.get(this._data, 'min');
  }
  get max() {
    return _.get(this._data, 'max');
  }
  get numUsers() {
    return _.get(this._data, 'num_users');
  }
}
