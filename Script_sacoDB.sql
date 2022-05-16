# Inserindo dados na tabela tipo_cliente
SELECT *
FROM saco.tipo_cliente;

INSERT INTO saco.tipo_cliente
VALUES 	(1, 'Freguês'),
		(2, 'Especial'),
		(3, 'Normal');

# Inserindo dados na tabela cliente
SELECT * 
FROM saco.cliente;

INSERT INTO saco.cliente
VALUES 	(1, '626.554.758-52', 'Rua Glaycon Melazo', 'Davi Martin', 1, '27.469.519-4', '(62) 2922-1833'),
		(2, '934.610.072-93', 'Rua São Francisco', 'Elias Benedito', 3, '31.069.066-3', '(68) 3695-6869'),
		(3, '295.825.451-86', 'Rua Promotor Valdir ', 'Alícia Letícia', 2, '23.132.409-1', '(79) 2710-0672'),
		(4, '795.825.527-60', 'Rua do Catetinho', 'Kamilly Nicole', 1, '10.342.025-3', '(84) 3841-4662'),
		(5, '597.126.218-12', 'Praça Inácio Pereira', 'Isabelle Isabel', 3, '597.126.218-12', '(11) 2984-6241'),
		(6, '335.859.536-62', 'Rua Ranulfo Campos', 'Melissa Eloá', 1, '28.925.958-7', '(45) 2540-5732'),
		(7, '964.094.619-25', 'Parque Residencial Ana', 'Ayla Isabella', 2, '26.191.812-6', '(43) 3586-3813'),
		(8, '183.890.117-51', 'Rua Doutor Vilson', 'Cristiane Sarah', 2, '21.403.695-9', '(54) 2726-9638'),
		(9, '377.376.646-70', 'Rua Capotiraguá', 'Isabella Gabriela', 1, '15.151.862-2', '(11) 2739-9346'),
		(10, '036.128.057-20', 'Parque Santa Cecília', 'Stefany Rosângela', 3, '46.869.754-8', '(62) 3707-7828'),
		(11, '941.343.974-56', 'Rua Severino Fernandes', 'Evelyn Louise', 2, '26.555.749-5', '(82) 3719-8018'),
		(12, '442.103.510-67', 'Rua Diva Tavares', 'Patrícia Josefa', 1, '34.176.157-6', '(85) 3775-7538'),
		(13, '756.020.330-25', 'Rua São João', 'André Kevin', 1, '28.899.097-3', '(61) 3767-4848'),
		(14, '579.030.535-07', 'Rua Santos Dumont', 'Jéssica Gabrielly', 2, '48.752.107-9', '(44) 2653-8049'),
		(15, '626.001.439-20', 'Rua Joaquim Nabuco', 'Emily Raquel', 1, '13.298.487-8', '(27) 3901-8971'),
		(16, '086.443.044-29', 'Rua José Augusto', 'Carlos Eduardo', 3, '34.205.363-2', '(31) 3941-6261'),
		(18, '358.964.901-19', 'Rua Edgar Kozoroswisk', 'Raul Manuel', 2, '32.693.222-7', '(67) 2956-2967'),
		(19, '947.549.916-48', 'Rua Campinas', 'Marli Nina', 2, '34.821.027-9', '(49) 2950-5935')
		;

# Inserindo dados na tabela especialidade
SELECT * 
FROM saco.especialidade e;

INSERT INTO saco.especialidade 
VALUES 	(1, 'Eletrônica embarcada'),
		(2, 'Carros de luxo'),
		(3, 'Funileiro'),
		(4, 'Reparador de câmbios'),
		(5, 'Carros híbridos e elétricos'),
		(6, 'Geral')
		;

# Inserindo dados na tabela veiculo
SELECT *
FROM saco.veiculo;

INSERT INTO saco.veiculo 
VALUES 	(1, 'LWD-6436', 'Porsche', 'Panamera'),
		(2, 'HSD-1942', 'Fiat', 'Siena'),
		(3, 'HOM-2508', 'Fiat', 'Uno Mille'),
		(4, 'MFS-8287', 'Fiat', 'Uno Mille'),
		(5, 'HZW-0112', 'Fiat', 'FREEMONT'),
		(6, 'HZE-4960', 'Honda', 'Civic'),
		(7, 'HNZ-6539', 'Honda', 'HR-V'),
		(8, 'NEM-9164', 'Ford', 'Verona'),
		(9, 'NDM-7562', 'Ford', 'Escort'),
		(10, 'MYW-0499', 'Ford', 'EcoSport'),
		(11, 'LVW-8863', 'Ford', 'F-100'),
		(12, 'LVW-6572', 'Ford', 'F-1000'),
		(13, 'BAB-3446', 'Hyundai', 'Cup'),
		(14, 'MWO-1844', 'Hyundai', 'HB20S'),
		(15, 'GSB-1879', 'Hyundai', 'Atos'),
		(16, 'JTI-1659', 'Hyundai', 'Terracan '),
		(17, 'KIZ-3722', 'Jeep', 'Cherokee'),
		(18, 'NAS-2969', 'Toyota', 'Hilux'),
		(19, 'NET-8861', 'Toyota', 'Corolla '),
		;
	

# Inserindo dados na tabela ficha_cliente
SELECT * FROM saco.ficha_cliente;

INSERT INTO saco.ficha_cliente(id_veiculo, id_cliente)
VALUES 	(19, 1),
		(18, 2),
		(17, 3),
		(16, 4),
		(15, 5),
		(14, 6),
		(13, 7),
		(12, 8),
		(11, 9),
		(10, 10),
		(9, 11),
		(8, 12),
		(7, 13),
		(6, 14),
		(5, 15),
		(4, 16),
		(2, 18),
		(1, 19)
		;


# Inserindo dados na tabela funcionario
SELECT * FROM saco.funcionario fc;

ALTER TABLE saco.funcionario MODIFY cpf varchar(15);

DELETE FROM funcionario WHERE id = 3;

INSERT INTO saco.funcionario
VALUES 	(1, 'Yasmin Liz', '(87) 3996-1414', '45.658.128-5', '208.475.104-76', 1, 1900, STR_TO_DATE('14/02/2020', '%d/%m/%Y')),
		(2, 'Benjamin Luís', '(87) 3894-7530', '49.577.184-3', '059.994.354-80', 2, 2400, STR_TO_DATE('05/05/2021', '%d/%m/%Y')),
		(3, 'Isis Rebeca', '(87) 3575-2798', '13.120.288-1', '231.567.944-30', 3, 1800, STR_TO_DATE('27/02/2021', '%d/%m/%Y')),
		(4, 'Leandro Levi', '(87) 2572-2712', '22.812.366-5', '138.212.464-30', 4, 4900, STR_TO_DATE('16/02/2011', '%d/%m/%Y')),
		(5, 'Clarice Vanessa', '(87) 3780-8030', '23.056.526-8', '129.186.444-04', 5, 3200, STR_TO_DATE('16/02/2013', '%d/%m/%Y')),
		(6, 'Rayssa Daiane', '(87) 2561-1964', '16.699.940-4', '305.964.444-60', 6, 5900, STR_TO_DATE('26/02/2015', '%d/%m/%Y')),
		(7, 'Heloisa Jéssica', '(87) 2602-6127', '21.858.593-7', '756.920.344-50', 1, 1900, STR_TO_DATE('11/03/2018', '%d/%m/%Y')),
		(8, 'Fernanda Camila', '(87) 2648-2674', '19.603.914-9', '434.296.754-56', 2, 1900, STR_TO_DATE('07/05/2018', '%d/%m/%Y')),
		(9, 'Francisco Juan', '(87) 2628-8998', '24.731.861-9', '444.863.344-69', 3, 3700, STR_TO_DATE('07/03/2014', '%d/%m/%Y')),
		(10, 'Pietro Vinicius', '(87) 2931-1201', '31.639.164-5', '883.549.164-99', 4, 4200, STR_TO_DATE('10/02/2013', '%d/%m/%Y')),
		(11, 'Esther Lúcia', '(87) 2753-0168', '45.206.132-5', '501.821.124-54', 5, 3900, STR_TO_DATE('14/02/2010', '%d/%m/%Y')),
		(12, 'Osvaldo Luiz', '(87) 3866-7790', '47.877.892-2', '983.589.014-536', 6, 5300, STR_TO_DATE('14/02/2017', '%d/%m/%Y')),
		(13, 'Maya Sabrina', '(87) 3835-7216', '38.342.744-7', '677.691.104-59', 1, 2900, STR_TO_DATE('20/02/2010', '%d/%m/%Y')),
		(14, 'César Gabriel', '((87) 2851-7780', '21.942.662-4', '303.196.994-47', 2, 2900, STR_TO_DATE('14/02/2014', '%d/%m/%Y')),
		(15, 'Erick Enzo', '(87) 3835-4610', '36.344.445-2', '318.395.564-47', 3, 1700, STR_TO_DATE('19/04/2019', '%d/%m/%Y'))
		;

# Inserindo dados na tabela tipo_servico
SELECT * FROM saco.tipo_servico;

INSERT INTO saco.tipo_servico
VALUES 	(2, 'Funilaria', 200),
		(3, 'Troca de óleo', 50),
		(4, 'Alinhamento e balanceamento', 400),
		(5, 'Manutenção de embreagem', 300),
		(6, 'Revisão dos componentes de freio', 100),
		(7, 'Revisão Geral', 200),
		(8, 'Reparo de Motor', 400),
		(9, 'Reparo de Motor hibrido', 500)
		;

# Inserindo dados na tabela ordem_servico
SELECT * FROM saco.ordem_servico;

ALTER TABLE saco.ordem_servico MODIFY saida datetime;

INSERT INTO saco.ordem_servico 
VALUES 	(1, '2020-06-15 09:34:21', '2020-06-15 15:34:21'),
		(2, '2020-06-14 11:00:21', '2020-06-14 14:17:00'),
		(3, '2020-06-13 09:34:21', '2020-06-13 16:14:21')
	;

UPDATE ordem_servico
SET saida = value1
WHERE valuue;
# Inserindo dados na tabela servico
SELECT * FROM saco.servico;

INSERT INTO saco.servico
VALUES 	(1, 7, 1),
		(2, 3, 1),
		(3, 2, 1)
	;

# Inserindo dados na tabela item_servico
SELECT * FROM saco.item_servico;

INSERT INTO saco.item_servico
VALUES 	(1, 3, 1),
		(2, 8, 2),
		(3, 7, 3)
		;
	
# Inserindo dados na tabela pagamento
SELECT * FROM saco.pagamento;

INSERT INTO saco.pagamento
VALUES 	(1, 200, 0, 0),
		(2, 50, 0, 0),
		(3, 200, 0, 0)
		;
	
# Inserindo dados na tabela nota_fiscal
SELECT * FROM saco.nota_fiscal;

INSERT INTO saco.nota_fiscal
VALUES 	(1, '01', 1),
		(2, '02', 2),
		(3, '03', 3)
		;


# Inserindo dados na tabela item_ficha_cliente
SELECT * FROM saco.item_ficha_cliente;

INSERT INTO saco.item_ficha_cliente
VALUES 	(1, 2, 2, 38),
		(2, 3, 3, 40),
		(3, 1, 1, 45)
		;


# Inserindo dados na tabela item_ficha_servico
SELECT * FROM saco.item_ficha_servico;

INSERT INTO saco.item_ficha_servico
VALUES 	(1, 2, 1),
		(2, 3, 2),
		(3, 1, 3)
		;






