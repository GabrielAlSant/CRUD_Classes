import Aluno from "./Aluno.js"

let alunos_IF_NovaAndradina = new Aluno()


alunos_IF_NovaAndradina.create("Matheus Andrade", "Rua A", "12/02/1980", "987654321","454.646.456-52", "567464", "Informática")
alunos_IF_NovaAndradina.create("Matheus Andrade", "Rua A", "12/02/1980", "987654321","454.646.456-52", "567464", "Informática")
alunos_IF_NovaAndradina.create("Matheus Andrade", "Rua A", "12/02/1980", "987654321","454.646.456-52", "567464", "Informática")
alunos_IF_NovaAndradina.create("Matheus Andrade", "Rua A", "12/02/1980", "987654321","454.646.456-52", "567464", "Informática")


alunos_IF_NovaAndradina.update(1,'Matheus Santos Andrade', 'Rua da Saudade, 223', 545454545,"TADS3")
alunos_IF_NovaAndradina.delete(2)

console.log(alunos_IF_NovaAndradina.all)