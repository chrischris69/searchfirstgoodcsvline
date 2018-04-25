Created on Tue Apr 17 20:08:07 2018

@author: christian marechal

Recherche de la premiere ligne de csv interessante
correspondante a la regularite d un tableau exploitable

La methode searFirstCSVlineGood ()
prend trois paramètres 
 -csvlignes = premieres lignes d un fichier csv
 -limitemax = profondeur maximale de l exploration des lignes a explorer
 -traceon : option trace

exemple d utilisation 
numero = searFirstCSVlineGood (csvlignes, 20, True)
print("Premiere ligne->"+str(numero))
