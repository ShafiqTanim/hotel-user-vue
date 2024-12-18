import http from "../http-common";

class DataService {
  login(data) {
    return http.post("customer/login", data);
  }
  registration(data) {
    return http.post("customer/register", data);
  }
  updateProfile(data) {
    return http.post('customer/edit/{customer}', data);
  }
  reservationRequest(data) {
    return http.post('reservation/create', data);
  }
  roomList(data) {
    return http.get('roomlist/index', data);
  }
  // orders(uid) {
  //   return http.get(`/orders/${uid}`);
  // }
  // ordertrack(uid) {
  //   return http.get(`/ordertrack/${uid}`);
  // }
  // ordertrack_save(data) {
  //   return http.post("/ordertrack_save", data);
  // }
  // doctor(dept) {
  //   return http.get(`/doctor/${dept}`);
  // }
  // getAll(uid) {
  //   return http.get(`/booking/${uid}`);
  // }

  // get(id) {
  //   return http.get(`/booking_single/${id}`);
  // }
  // student_details(id) {
  //   return http.get(`/student_details/${id}`);
  // }

  // login(data) {
  //   return http.post("/student_login", data);
  // }

  // update(id, data) {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }



  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new DataService();