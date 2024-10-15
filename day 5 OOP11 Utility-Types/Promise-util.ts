interface Geolocation {
  lat: string;
  long: string;
}

interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface Name {
  firstname: string;
  lastname: string;
}

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  address: Address;
  __v: number;
}

const fetchUsersData = async <T>(limit: number): Promise<T[]> => {
  try {
    const res = await fetch(`https://fakestoreapi.com/users?limit=${limit}`);
    const data: T[] = await res.json();
    return data;
  } catch (error: any) {
    console.log("error fetching Users Data: ", error?.message);
    return [];
  }
};

const displayUsers = async () => {
  const users: User[] = await fetchUsersData<User>(3);
  console.log(users);
};

displayUsers();
