type UpdateRepository = { name: string; email: string; password: string };
type Params = { id: string };

function updateUserRoute(body: UpdateRepository, params: Params) {
  const { name, email, password } = body;
  const { id } = params;
  updateUserController({
    name,
    email,
    password,
    id,
  });
}

function updateUserController({
  email,
  name,
  password,
  id,
}: UpdateRepository & Params) {
  userRepository.update({
    email,
    name,
    password,
    id,
  });
}

const userRepository = {
  update: ({ email, name, password, id }: UpdateRepository & Params) => {
    console.log({ email, name, password, id });
  },
};
