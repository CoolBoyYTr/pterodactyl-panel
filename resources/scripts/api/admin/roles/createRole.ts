import http from '@/api/http';
import { Role, rawDataToRole } from '@/api/admin/roles/getRoles';

export default (name: string, description?: string): Promise<Role> => {
    return new Promise((resolve, reject) => {
        http.post('/api/application/roles', {
            name, description,
        })
            .then(({ data }) => resolve(rawDataToRole(data)))
            .catch(reject);
    });
};