# Join para adicionar o campo especialidade 
SELECT 	f.id,
		nome,
		telefone,
		rg,
		cpf,
		e.descricao as especialidade,
		salario,
		data_admissao
FROM funcionario f
LEFT JOIN especialidade e ON f.id_especialidade = e.id;

# Join para adicionar o campo tipo_cliente 
SELECT c.id,
		cpf_cnpj,
		endereco,
		nome,
		id_tipo_cliente,
		tc.tipo as tipo,
		rg,
		telefone
FROM cliente c
LEFT JOIN tipo_cliente tc ON c.id_tipo_cliente = tc.id;


# Funcionarios que também são clientes	
SELECT 
	c.id as id_cliente,
	f_out.nome,
	f_out.especialidade
FROM (
	SELECT 
		f.nome,
		f.cpf,
		e.descricao as especialidade
	FROM funcionario f
	LEFT JOIN especialidade e ON f.id_especialidade = e.id
	) as f_out
INNER JOIN saco.cliente c ON f_out.cpf = c.cpf_cnpj;

# Funcionários que ganham mais que a média

SELECT 	*
FROM saco.funcionario
WHERE salario > (	SELECT AVG(salario) 
					FROM saco.funcionario
					WHERE YEAR(data_admissao) > 2020
					)
;

# Marcas e modelos mais atendidos
SELECT * 
FROM(
	SELECT 	
			'Marca' as tipo,
			v.marca as descricao,
			COUNT(v.marca) AS n_veiculos
	FROM veiculo v
	GROUP BY v.marca
	ORDER BY COUNT(v.marca) DESC
	LIMIT 1
	) a
UNION ALL
SELECT * 
FROM(
	SELECT 	
			'Modelo' as tipo,
			v2.modelo as descricao,
			COUNT(v2.modelo) AS n_veiculos
	FROM veiculo v2
	GROUP BY v2.modelo
	ORDER BY COUNT(v2.modelo) DESC
	LIMIT 1
	) b
;

# Serviço por id
SELECT * 
FROM saco.item_servico 
WHERE id = 1;

# Top 10 espera dos Clientes
SELECT 
		os.id as id_os, 
		TIME_FORMAT(TIMEDIFF(saida, entrada), '%H horas e %i minutos') as espera,
		c.nome
FROM ordem_servico os
LEFT JOIN item_ficha_cliente ifc ON os.id = ifc.id_os
LEFT JOIN ficha_cliente fc ON ifc.id_ficha_cliente = fc.id
LEFT JOIN cliente c ON fc.id_cliente = c.id
ORDER BY espera DESC
LIMIT 10;


# Funcionarios que recebem o mesmo salário
SELECT 
		f_out.nome,
		f_out.salario
FROM funcionario f_out
INNER JOIN (
	SELECT salario, 
			COUNT(*) AS cnt 
	FROM funcionario
	GROUP BY salario
	HAVING cnt > 1) f_in ON f_out.salario = f_in.salario
ORDER BY salario
;


# Funcionários que participaram de todos os servicos 
SELECT 
	id_funcionario,
	COUNT(id_funcionario) as servicos 
FROM item_servico is2
GROUP BY id_funcionario
HAVING servicos = (	SELECT sum(servicos) 
				FROM(
					SELECT COUNT(*) AS servicos
					FROM item_servico
					GROUP BY id_servico
					) s
				)
;

		
