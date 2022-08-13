import { api } from '@/config/axios';

class StudentService {
    getAll() {
        return api.get('/users');
    }

    getById(id) {
        return api.get(`/users/${id}`);
    }

    create(student) {
        return api.post('/users', student);
    }

    save(student) {
        return api.put('/users', student);
    }

    deleteStudent(id) {
        return api.delete(`/users/${id}`);
    }
}

export default new StudentService();
