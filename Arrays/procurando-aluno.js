const alunos = ['João', 'Juliana', 'Ana', 'Caio'];

const medias = [10, 8, 7.5, 9];

const listaDeAlunosMedias = [alunos, medias];

exibeNomeENota = (aluno) => {
    if(listaDeAlunosMedias[0].includes(aluno)){
        const [alunos, medias] = listaDeAlunosMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    }else{
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");