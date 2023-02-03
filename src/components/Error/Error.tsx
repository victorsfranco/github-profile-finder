import classes from "./Error.module.css";

const Error = () => {
  return (
    <div className={classes.container}>
      <h2>Usuário não encontrado!</h2>
      <p>Verifique o nome de usuário e tente novamente.</p>
    </div>
  );
}

export default Error;