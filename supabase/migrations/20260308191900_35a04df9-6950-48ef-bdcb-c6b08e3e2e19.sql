
UPDATE plants
SET common_name = 'Ginkgo',
    special_features = 'Ancient species, plant males only, very drought tolerant',
    landscape_use = 'Street tree, specimen, fall color'
WHERE id = 17;

DELETE FROM plants WHERE id = 219;
